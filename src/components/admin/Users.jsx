
const users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '555-1234',
      email: 'johndoe@example.com',
      address: '123 Main Street'
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '555-5678',
      email: 'janesmith@example.com',
      address: '456 Elm Street'
    }    
  ];

export const Users = () => {
       
    return (
        <ul className="list-group">
            {users.map(user => (
                <li key={user.id} className="list-group-item my-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-1">{user.name}</h5>
                            <p className="mb-1"><strong>Phone:</strong> {user.phone}</p>
                            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
                            <p className="mb-0"><strong>Address:</strong> {user.address}</p>
                        </div>
                        {/* <button type="button" className="btn btn-primary">Edit</button> */}
                    </div>
                </li>
            ))}
        </ul>
  );
           
}