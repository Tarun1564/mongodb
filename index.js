let inputEle=document.getElementById("inputEle");
const arr = [
  { que: "A query uses $sort and $limit in an aggregation pipeline. What is the result?", ans: "Sorted and limited results" },
  { que: "You are tasked with updating the status field to active for a user with _id: 123. Which operation should you use?", ans: 'updateOne({_id: 123}, {$set: {status: "active"}})' },
  { que: "Which scenario would benefit the most from a geospatial index in MongoDB?", ans: "Query searching nearby locations by coordinates" },
  { que: "What is the correct syntax to insert one document using the Node.js driver?", ans: "db.collection.insertOne(doc)" },
  { que: "How can you find all documents where a specific field is not null?", ans: '{ field: { $ne: null } }' },
  { que: "Can two documents with the same _id value exist in the same collection?", ans: "No" },
  { que: "What is the purpose of the findOneAndUpdate() method?", ans: "To find and update a document, returning the updated document" },
  { que: "An aggregation pipeline uses $lookup to join two collections. What stage does $lookup represent?", ans: "A foreign data join stage" },
  { que: "What does an aggregation pipeline in MongoDB do?", ans: "Processes data through a series of stages" },
  { que: "What is the purpose of the MongoDB Node.js 'findOne' method?", ans: "To retrieve a single document" },
  { que: "What option ensures that the findOneAndUpdate() method returns the updated document?", ans: "{ returnOriginal: false }" },
  { que: "Which method returns a cursor in MongoDB Node.js Driver?", ans: "collection.find()" },
  { que: 'A user wants to add a new document { name: "Alice", age: 25 } to a collection. Which command should they use?', ans: 'db.collection.insertOne({ name: "Alice", age: 25 })' },
  { que: "A developer needs to retrieve only the name and email fields from documents. Which projection is correct?", ans: '{ name: 1, email: 1 }' },
  { que: "How would you skip first 5 documents in a query result?", ans: "find().skip(5)" },
  { que: "Embed comments in ticket documents?", ans: "Embed comments in ticket documents" },
  { que: "What is the default index created on every MongoDB collection?", ans: "_id index" },
  { que: "How does MongoDB handle an improperly formed insert command?", ans: "Throws an error" },
  { que: "What happens if two documents in the same collection have conflicting field types?", ans: "Error is logged" },
  { que: "When performing a find() query with a range query on a single field, which index is beneficial?", ans: "Single-field index" },
  { que: "What is the recommended way to connect to a MongoDB Atlas cluster from a Node.js application?", ans: "All of the above" },
  { que: "What is the default value of maxPoolSize in the MongoDB Node.js Driver?", ans: "100" },
  { que: "Which of the following is a valid use of the $merge stage in aggregation?", ans: "Write results to an existing collection" },
  { que: "What happens if an update command is executed without using update operators?", ans: "Overwrites the entire document" },
  { que: "Which command is used to insert a single document into a MongoDB collection?", ans: "insertOne" },
  { que: "You are running an aggregation query that uses $lookup. What index can improve the performance of this aggregation?", ans: "Index on the foreign field" },
  { que: "Given a query with no constraint and a sort on two fields causing a collection scan, which index would optimize the performance?", ans: "Compound index on both fields" },
  { que: "What happens when a document without an _id field is inserted into a collection?", ans: "Generates an _id automatically" },
  { que: "A user needs to retrieve only the name field from documents. What projection is correct?", ans: '{ name: 1 }' },
  { que: "Which method is used to retrieve one document?", ans: "collection.findOne()" },
  { que: 'A query must find documents where a status field contains "open" or "pending". What syntax is correct?', ans: '{ status: { $in: ["open", "pending"] } }' },
  { que: "A user wants to limit the results of a query to 5 documents. Which method should they use?", ans: "query.limit(5)" },
  { que: "A query is required to retrieve documents where the field score is not equal to 50. What is the correct syntax?", ans: '{ score: { $ne: 50 } }' },
  { que: "A user needs to retrieve only distinct values of a category field. What method should they use?", ans: 'distinct("category")' },
  { que: "How can you check the number of indexes on a MongoDB collection?", ans: "db.collection.listIndexes()" },
  { que: "Which aggregation stage is used to filter documents based on conditions?", ans: "$match" },
  { que: "You are asked to count the number of documents where status is inactive. Which command should you use?", ans: 'db.collection.countDocuments({ status: "inactive" })' },
  { que: "What is the correct syntax for a simple equality query?", ans: '{ field: "value" }' },
  { que: "You have a document containing a large array. How can performance be optimized for queries?", ans: "Use indexed arrays" },
  { que: "Which data modeling approach is least scalable for a one-to-many relationship?", ans: "Using arrays with thousands of nested elements" },
  { que: "How do you retrieve all results from a MongoDB cursor?", ans: "Use the toArray method" },
  { que: "What is the purpose of the $unset operator?", ans: "Removes a field from a document" },
  { que: "What is the MongoDB Query Language (MQL)?", ans: "A syntax for querying and manipulating data in MongoDB" },
  { que: "When an index is not used in a query, MongoDB will perform a:", ans: "Collection scan" },
  { que: "Which of the following is a properly formed insert command for a single document?", ans: 'collection.insertOne({ name: "John" })' },
  { que: 'A query retrieves documents matching { status: "active" } and sets a limit of 3 results. What is the correct syntax?', ans: 'db.collection.find({ status: "active" }).limit(3)' },
  { que: "What is connection pooling?", ans: "Reusing existing connections to the database" },
  { que: "What does $addFields do in an aggregation pipeline?", ans: "Adds computed fields to documents" },
  { que: "A query is required to find documents where a field quantity exists. What is the correct operator?", ans: "$exists" },
  { que: "Which operator should be used to match documents with a specific condition on array elements?", ans: "$elemMatch" },
  { que: "How would you check how many indexes exist for a collection in MongoDB?", ans: "db.collection.getIndexes()" },
  { que: "If a collection has an index on a field queried with $in, which index provides the best performance?", ans: "Single-field index" }
];
let container=document.getElementById("container");
console.log(arr.length);
function fun(){
    for(let x of arr){
    let con=document.createElement("div");
    con.classList.add("con");
    let p1=document.createElement("p");
    p1.textContent=x.que;
    p1.classList.add("para");
    let h1=document.createElement("h2");
    h1.textContent=x.ans;
    h1.classList.add("head");
    container.appendChild(con);
    con.appendChild(p1);
    con.appendChild(h1);    
    }
}

fun();

function displayEle(event){
    container.textContent="";
    const searchEle=event.target.value;
    const results = arr.filter(item => item.que.toLowerCase().startsWith(searchEle.toLowerCase()));
    for(let x of results){
        let con=document.createElement("div");
        con.classList.add("con");
        let p1=document.createElement("p");
        p1.textContent=x.que;
        p1.classList.add("para");
        let h1=document.createElement("h2");
        h1.textContent=x.ans;
        h1.classList.add("head");
        container.appendChild(con);
        con.appendChild(p1);
        con.appendChild(h1);    
    }
}
inputEle.addEventListener("keydown",displayEle);
