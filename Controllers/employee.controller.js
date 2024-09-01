const employees=[
    {id:1,name:"suresh",designation:"FSD"},
    {id:2,name: "mukesh",designation:"Front end developer"},
    {id:3,name:"Armstrong",designation:"Backend developer"},
    {id:4, name:"Hema",designation:"FSD"}
]
export const getEmpDetails=(req,res)=>{
    res.status(200).json({data:employees})
}

export const getEmpDetailsById=(req,res)=>{
    const empId = req.params.id;
    const empDetail = employees.find(emp=>emp.id == empId)
    if(!empDetail){
        return res.status(404).json({message:"Emp detail not found"})
    }
    res.status(200).json({data:empDetail})
}
export const createEmpDetail=(req,res)=>{
     const {name, designation} = req.body
     const newEmpDetails = {
        id:employees.length+1,
        name:name,
        designation:designation
     }
     employees.push(newEmpDetails)

     res.status(200).json({message:"Employee detail added successfully", data:employees})
}
export const updateEmpById=(req,res)=>{
    const empId = req.params.id;
    const {name, designation} = req.body;
    
    const index = employees.findIndex(emp=>emp.id == empId)
    console.log("index", index);
    if(index === -1){
        return res.status(404).json({message:"Employee not found"})
    }

    employees[index].name = name;
    employees[index].designation = designation;

    res.status(200).json({message:"Employee details updated successfully",data:employees})
}
export const deleteEmpById=(req,res)=>{
    const empId = req.params.id;

    const index = employees.findIndex(emp=>emp.id == empId)
    if(index === -1){
        return res.status(404).json({message:"Employee not found"})
    }
    employees.splice(index,1)
    res.status(200).json({message:"Deleted Successfully",data:employees})
}
