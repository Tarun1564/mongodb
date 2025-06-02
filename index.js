let inputEle=document.getElementById("inputEle");
let arr=[{que:"What is a way that you can mark a knowledge article for review?",ans:"Flag article"},
          {que:"What is a schema map?",ans:"A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"},
          {que:"Tables are made up of which of the following?",ans:"Fields"},
          {que:"which type of script runs in the browser?",ans:"UI policies and client scripts"},
          {que:"What is the master table that contains a record for each table in the database?",ans:"[sys_db_object]"},
          {que:"Why is it recommended that you Limit update sets to maximum of 100 records? Choose 2 answers?",ans:"Reduce potential conflicts, Make it easier to identify and review changes"},
          {que:"Knowledge Base Search results can be sorted by which of the following? (Choose three.)",ans:"Relevancy, Most recent update, Popularity"},
          {que:"What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles.",ans:"User Criteria"},
          {que:"A knowledge article must be which of the following states to display to a user?",ans:"Published"},
          {que:"As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",ans:"A metric is a time measurement used to report the effectiveness of workflows and SLAs"},
          {que:"Which one of the following statements best describes the purpose of an Update Set?",ans:"An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems"},
          {que:"It time for end user is based on the round trip between the client and the server. What activities are included in the round trips?",ans:"Request + Response"},
          {que:"Reports can be created from which different places in the platform? (Choose two.)",ans:"List-column heading, Metrics module"},
          {que:"What is the best way to learn about performance analytics?",ans:"Take a ServiceNow Performance Analytics course on Now Learning"},
          {que:"Which type of tables may be extended by other tables, but do not extend another table?",ans:"Base Tables"},
          {que:"What are the different ways you can create a favourite for a particular record? Choose two answers?",ans:"From list, click the star icon, From the record form header, click the star icon"},
          {que:"When looking at a long list of records, you want to quickly filter, to show only those which have category of hardware. How might you do that?",ans:"On the list, locate and right click on the value Hardware, select show matching"},
          {que:"A Service Catalog may include which of the following components?",ans:"Record Producers, Order Guides, and Catalog Items"},
          {que:"When working on a form, what is the difference between Insert and Update operations?",ans:"Insert creates a new record and Update saves changes, both remain on the form"},
          {que:"What is the purpose of flagging an article in a knowledge base?",ans:"Allow a user to submit feedback about an article"},
          {que:"What utility enables process owners to other cross enterprise workflows within a single unified process?",ans:"Process automation designer"},
          {que:"Which of the following is used to initiate a flow?",ans:"A Trigger"},
          {que:"From the User menu, which actions can a user select? (Choose three.)",ans:"Order from Service Catalog, Approve Records, Log Out ServiceNow"},
          {que:"Which one of these applications is available to all users?",ans:"Self-Service"},
          {que:"The display sequence is controlled in a Service Catalog Item using which of the following?",ans:"The Order field in the Variable form"},
          {que:"What is a characteristic of importing data into ServiceNow?",ans:"An existing Transform Map can be used multiple times on the same import set"},
          {que:"What is the function of user impersonation?",ans:"Testing and visibility"},
          {que:"Where would you go in ServiceNow to order services and products offered by various departments?",ans:"Service Catalog"},
          {que:"Here is as example of the criteria set for a knowledge base: Companies: ACME North America, department: HR, groups: ACME MANAGERS, Match all: yes. in this example, what user would have access to this knowledge base?",ans:"Members of the ACME Manager group, who are also members of HR department and part of ACME North America"},
          {que:"Groups are defined at what?",ans:"A collection of users"},
          {que:"Service Now uses what term to describe all the data saved within a particular form?",ans:"Record"},
          {que:"What is a set of condition applied to a table list to show as subset of the data?",ans:"Filter"},
          {que:"Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",ans:"They direct the user to a record producer"},
          {que:"What is the platform name for the User table?",ans:"Sys_user"},
          {que:"A role is recorded in which table?",ans:"Role[sys_user_role]"},
          {que:"What module do you use to access the report that are available to you?",ans:"Reports > View/Run"},
          {que:"An IT User calls the service desk Because they need to work on task records. all they can see his self-service on their homepage when they log into the service now instance. what issue could explain this? choose two answers?",ans:"That user account does not have ITIL role, That user account does not belong to any group which contains the ITIL role"},
          {que:"Using the module. system properties> my company. what branding options are available?",ans:"Company name, company logo, colour scheme"},
          {que:"When using the report designer, it is best practice to make copy of an existing report then make modification to your copy of that report. when viewing the report inside the designer, how would you make a copy of the report?",ans:"Click on the down triangle and select insert and stay"},
          {que:"From form designer, how would you define a section, so it displays as a tab?",ans:"Add .tab to the end of the section name"},
          {que:"A REQ number in the Service Catalog represents...",ans:"The order number."},
          {que:"Which application is used to change the number format per table?",ans:"Number Maintenance"},
          {que:"What type of rules specify which user groups are responsible to work on different types of tasks?",ans:"Assignment"},
          {que:"As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",ans:"A metric is a time measurement used to report the effectiveness of workflows and SLAs"},
          {que:"Which technique is used to get information from a series of referenced fields from different tables?",ans:"Dot-Walking"},
          {que:"Each knowledge bases can have unique lifecycle workflows, user criteria, category structures, and management assignments.",ans:"TRUE"},
          {que:"Which flow components allow you to specify when a flow should be run?",ans:"Trigger and condition"},
          {que:"How are Workflows moved between instances?",ans:"Workflows are moved using Update Sets"},
          {que:"Which term refers to application menus and modules which you may want to access quickly and often?",ans:"Favorite"},
          {que:"A customer has asked for the following updates to a form: make resolution code mandatory, when state is changed to resolved, hide major incident checkbox, unless logged in user as major incident manager role. what type of rules would you use to implement this requirement?",ans:"UI policy and actions"},
          {que:"What are the two pathways to view feedback left on a published article?",ans:"Knowledge > Articles > My Flagged, Knowledge Base > My Knowledge > Flagged Articles"},
          {que:"What displays a set of records from a table?",ans:"List"},
          {que:"For a customerÃ¢Â Â's inventory application, several inventory applications fields on a needed-on inventory ticket. this ticket will be assigned to inventory support team members. how would you start to implement this requirement?",ans:"Create inventory table as an extended table from the task table. Then add the inventory specification fields, as needed."},
          {que:"Which one statement correctly describes Access Control rule evaluation?",ans:"If a row level rule and a field level rule exist, both rules must be true before an operation is allowed."},
          {que:"What refers to an application or system that accesses a remote service or another computer system, known as a server?",ans:"Client"},
          {que:"A User is stored in which table?",ans:"User [sys_user]"},
          {que:"A group is stored in which table?",ans:"Group [sys_user_group]"},
          {que:"Your customer wants to update a notification, so it is sent to the caller and also to the manager of the caller. how would you approach this requirement?",ans:"On the send to tab, add caller field, dot walk to caller’s manager to add manager."},
          {que:"Which one of the following statements applies to a set of fields when they are coalesced during an import?",ans:"If a match is found using the coalesce fields, the existing record is updated with the information being imported"},
          {que:"which group of permissions is used to control application and Module access?",ans:"Roles"}
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
