db.users.updateOne({
    "_id":
        ObjectId("4b253b067525f35f94b60a31")
}, { "$set": { "favorite book": "Start with Why" } })

db.universities.aggregate([
    { $match: { country: 'Spain', city: 'Salamanca' } }
]).pretty()

db.universities.aggregate([
    { $project: { _id: 0, country: 1, city: 1, name: 1 } }
]).pretty()

// sum, count, max, min, avg, push
db.universities.aggregate([
    { $group: { _id: '$name', totaldocs: { $sum: 1 } } }
]).pretty()


db.universities.aggregate([
    { $group: { _id: '$name', totaldocs: { $sum: 1 } } },
    { $out: 'aggResults' }
])
//   Now, we check the content of the new ‘aggResults’ collection:

db.aggResults.find().pretty()
// { "_id" : "UPSA", "totaldocs": 1 }
// { "_id" : "USAL", "totaldocs" : 1 }

// merge two collections using lookup
db.universities.aggregate([
    { $match: { name: 'USAL' } },
    { $project: { _id: 0, name: 1 } },
    {
        $lookup: {
            from: 'courses',
            localField: 'name',
            foreignField: 'university',
            as: 'courses'
        }
    }
]).pretty()

// sort by count
db.courses.aggregate([
    { $sortByCount: '$level' }
]).pretty()

db.universities.aggregate([
    { $match: { name: 'USAL' } },
    { $unwind: '$students' },
    { $project: { _id: 0, 'students.year': 1, 'students.number': 1 } },
    { $sort: { 'students.number': -1 } },
    { $limit: 2 }
]).pretty()