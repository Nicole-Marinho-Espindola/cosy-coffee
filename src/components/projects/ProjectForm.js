function Project(){
    return(
        <form>
            <div>
                <label>Event Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>Event Costs:</label>
                <input type="number" />
            </div>
            <div>
                <label>Event Type:</label>
                <select name="category_id">
                    <option disabled selected>Select a category</option>
                </select>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    )
}

export default Project