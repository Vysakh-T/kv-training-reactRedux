import InputField from "./components/InputField";
import Button from "./components/Button";
import InputSelect from "./components/InputSelect";

function CreateEmployee() {
    return ( 
        <main>
        <section className="title card">
            <h1>Create Employee</h1>
        </section>

        <section className="card">

            <form name="Ecreate" id="Ecreate" onsubmit="return false" className="form-con">

                <div className="form-ele">
                            {/* <label for="ename">Employee Name</label><br/>
                            <input type="text" id="ename" name="ename" placeholder="Employee Name"/><br/> */}
                            <InputField label="Employee Name" placeholder="Employee Name"></InputField>
                </div>

                <div className="form-ele">
                            {/* <label for="eid">Employee ID</label><br/>
                            <input type="text" id="eid" name="eid" placeholder="Employee ID"/><br/> */}
                            <InputField label="Employee ID" placeholder="Employee ID"></InputField>
                </div>

                <div className="form-ele">
                            {/* <label for="email">Email ID</label><br/>
                            <input type="text" id="email" name="email" placeholder="Email ID"/><br/> */}
                            <InputField label="Email ID" placeholder="Email ID"></InputField>
                </div>

                <div className="form-ele">
                    {/* <label for="jdate">Joining Date</label><br/>
                    <input type="text" onfocus="(this.type='date')"
                    onblur="(this.type='text')" id="jdate" name="jdate" placeholder="Joining Date"/><br/> */}

                    <InputField label="Joining Date" placeholder="Joining Date"></InputField>
                </div>

                <div className="form-ele">
                    {/* <label for="role">Role</label><br/>
                    <select name="role" id="role">
                        <option value="" disabled selected>Choose Role</option>
                        <option value="developer">Developer</option>
                        <option value="tester">Tester</option>
                        <option value="devops">DevOps</option>
                        <option value="designer">Designer</option>
                        <option value="hr manager">HR Manager</option>
                    </select>
                    <i className="c-down"></i> */}
                    <InputSelect label="Role" options={["Choose Role","HR", "ADMIN", "DEVELOPER", "TESTER"]}></InputSelect>
                </div>

                <div className="form-ele">
                    {/* <label for="status">Status</label><br/>
                    <select name="status" id="status">
                        <option value="" disabled selected>Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <i className="c-down"></i> */}
                    <InputSelect label="Status" options={["Status","Active", "Pending", "Inactive"]}></InputSelect>
                </div>

                <div className="form-ele">
                    {/* <label for="exp">Experience</label><br/>
                    <input type="text" id="exp" name="exp" placeholder="Experience"/><br/> */}

                    <InputField label="Experience" placeholder="Experience"></InputField>
                </div>

                <div className="form-ele">
                    {/* <label for="addr">Address</label><br/>
                    <input type="text" id="addr" name="addr" placeholder="Address"/><br/> */}
                    <InputField label="Address" placeholder="Address"></InputField>
                </div>

                <div className="form-ele">
                    <label for="idfile">Upload ID Proof</label><br/>
                    <input type="file" id="idfile" name="idfile"/><br/>
                    <div className="custom-file">
                    <label id="file-name">
                            Choose Files
                    </label>        
                    <label className="file-btn" for="idfile">
                        Browse
                    </label>
                    </div>
                </div>

                <div className="form-btns">
                {/* <input id="create" className="btn btn-primary" type="submit" value="Create"/>
                <input id="cancel" className="btn btn-secondary" onclick="" type="button" value="Cancel"/> */}
                <Button label="Submit" handleClick = {() => {}}></Button>
                <Button label="Cancel" handleClick = {() => {}}></Button>
                </div>

            </form>
        </section>

        </main>
     );
}

export default CreateEmployee;