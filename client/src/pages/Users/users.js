
import UserTable from '../../components/Table/UserTable/users';
import './users.css';

const Users = () => {
  return (
    <>
    <section className='users' id='users'>
    <div className="content">
            <h3>Users</h3>
        </div>
        <UserTable/>

    </section>
    </>
  )
}

export default Users;