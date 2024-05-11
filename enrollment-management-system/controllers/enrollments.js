import Enrollment from "../models/Enrollment.js";
import { createError } from "../utils/error.js";

// ADD NEW ENROLLMENT
export const addEnrollment = async (req, res, next) => {
    const { userId, courseId } = req.params;

    try{
        const existingEnrollment = await Enrollment.findOne({ userId });
        if (existingEnrollment && existingEnrollment.courseIds.includes(courseId)) {
            return res.status(404).json({message: 'Enrollment already exists' });
        }

        if (existingEnrollment) {
            existingEnrollment.courseIds.push(courseId);
            const updatedEnrollment = await existingEnrollment.save();
            return res.status(200).json(updatedEnrollment);
        }

        const newEnrollment = new Enrollment({
            userId,
            courseIds: [courseId]
        });

        const savedEnrollment = await newEnrollment.save();
        return res.status(201).json(savedEnrollment);
    } catch(err) {
        next(err);
    }
}


// GET ENROLLMENT STATUS
export const getEnrollmentStatus = async (req, res, next) => {
    const { userId, courseId } = req.params;

    try{
        const enrollment = await Enrollment.findOne({ userId });

        if (enrollment && enrollment.courseIds.includes(courseId)) {
            return res.status(200).json({ enrolled: true });
        }

        return res.status(200).json({ enrolled: false });
    } catch(err) {
        next(err);
    }
}

// DELETE AN ENROLLED COURSE FROM A SINGLE ENROLLMENT MODEL
export const deleteCourseEnrollment = async (req, res, next) => {
    const { userId, courseId } = req.params;

    try {
        const enrollment = await Enrollment.findOne({ userId });

        if (enrollment && enrollment.courseIds.includes(courseId)) {
            enrollment.courseIds = enrollment.courseIds.filter(id => id !== courseId);
            await enrollment.save();
            return res.status(200).json(enrollment);
        }

        return res.status(404).json({message: 'User is not enrolled in this course.' });
    } catch (err) {
        next(err);
    }
}

// DELETE AN ENROLLMENT MODEL GIVEN A USER ID
export const deleteEnrollment = async (req, res, next) => {
    const { userId } = req.params;

    try {
        const result = await Enrollment.findOneAndDelete({ userId });

        if (result) {
            return res.status(200).json({ message: 'All enrollments deleted for the user' });
        } else {
            return res.status(404).json({message: 'User is not enrolled in any course.' });
        }
    } catch (err) {
        next(err);
    }
}

// DELETE A COURSE ID FROM EVEY ENROLLMENT MODEL
export const deleteCourseInEnrollments = async (req, res, next) => {
    const { courseId } = req.params;

    try {
        const enrollments = await Enrollment.find({ courseIds: courseId });

        if (enrollments.length === 0) {
            return res.status(404).json({message: 'No user is enrolled in this course.' });
        }

        for (let enrollment of enrollments) {
            enrollment.courseIds = enrollment.courseIds.filter(id => id !== courseId);
            await enrollment.save();
        }

        return res.status(200).json({ message: `Course ${courseId} deleted from all enrollments` });
    } catch (err) {
        next(err);
    }
}
