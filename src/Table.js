const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Status</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>IDSID</th>
                    <th>WWID</th>
                    <th>Member</th>
                    <th>Full Name</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.idsid}>
                        <td>{item.status}</td>
                        <td>{item.lastName}</td>
                        <td>{item.firstName}</td>
                        <td>{item.idsid}</td>
                        <td>{item.wwid}</td>
                        <td>{item.member}</td>
                        <td>{item.fullName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;