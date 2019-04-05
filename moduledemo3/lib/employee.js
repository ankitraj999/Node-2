var database = (function () {

    var arrayid=[];
    
    var empId,empName,empSalary;
    
    var Employee=function(id,name,sal) {
    
    this.empId=id;
    
    this.empName=name;
    
    this.empSalary=sal;
    
    };
    
    setData=function(emp){
    
    arrayid.push(emp);
    
    //console.log('in set'+arrayid);
    
    };
    
    
    getAllData=function(){
    
    for(x in arrayid){
    
    console.log('Id is '+arrayid[x].empId);
    
    console.log('Name is '+arrayid[x].empName);
    
    console.log('Salary is '+arrayid[x].empSalary);
    
    }
    
    };
    
    return{
    
    set:setData,
    
    get:getAllData,
    
    data:Employee
    
    }
    
    
    })();
    
    module.exports = database;