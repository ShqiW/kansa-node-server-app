import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
    // Retrieve all assignments for a course
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter((assignment) => assignment.course === cid);
        res.json(assignments);
    });


    // Create a new assignment for a course
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            _id: new Date().getTime().toString(),
            course: cid,
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });


    // Delete an assignment by ID
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((assignment) => assignment._id !== aid);
        res.sendStatus(200);
    });

    // Update an assignment by ID
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = db.assignments.findIndex((assignment) => assignment._id === aid);
        if (assignmentIndex !== -1) {
            db.assignments[assignmentIndex] = {
                ...db.assignments[assignmentIndex],
                ...req.body,
            };
            res.sendStatus(204);
        } else {
            res.sendStatus(404);  // Not found
        }
    });

}