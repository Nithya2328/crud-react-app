interface Props{
  field:any;
  value:string;
  onChange:(name:string,value:string)=>void;
}

export default function FieldRenderer({field,value,onChange}:Props){
 const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  let val=e.target.value;

  // numeric only rule
  if(field.numeric){
    val=val.replace(/\D/g,"");   // remove non-digits
    val=val.slice(0,10);         // limit to 10 digits
  }

  // max length rule (for other fields)
  if(field.maxLength && !field.numeric){
    val=val.slice(0,field.maxLength);
  }

  onChange(field.name,val);
};

  return(
    <div className="mb-3">
      <label className="form-label">{field.label}</label>

      <input
        type={field.type}
        value={value || ""}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}
