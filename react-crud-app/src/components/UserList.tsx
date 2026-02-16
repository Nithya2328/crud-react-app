import type { User } from "../types/user";

interface Props{
  users:User[];
  onDelete:(id:number)=>void;
  onEdit:(user:User)=>void;
}

export default function UserList({users,onDelete,onEdit}:Props){

  const hasUsers = users.length > 0;

  return(
    <table className="table">
      <thead>
        <tr>
          {hasUsers && Object.keys(users[0]).map(k=> <th key={k}>{k}</th>)}
          {hasUsers && <th>Actions</th>}
        </tr>
      </thead>

      <tbody>
        {!hasUsers ? (
          <tr>
            <td colSpan={10} className="text-center text-muted">
              No users found
            </td>
          </tr>
        ) : (
          users.map(u=>(
            <tr key={u.id}>
              {Object.values(u).map((v,i)=>
                <td key={i}>{v}</td>
              )}
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={()=>onEdit(u)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={()=>onDelete(u.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
