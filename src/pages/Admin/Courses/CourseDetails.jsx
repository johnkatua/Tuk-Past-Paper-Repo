import { useState } from 'react'

const CourseDetails = () => {
  const [title, setTitle] = useState('Select a course');
  const [item, setItem] = useState({
    name: '',
    courseCode: '',
    status: '',
    facultyId: ''
  });

  const handleChange = () => {
    setItem((item) => ({
      ...item,
      [e.target.name]: e.target.value 
    }))
  }
  return (
    <div className='admin--dashboard__details'>
      <div className='details--header'>
        {title}
      </div>
      <div className='form--container__group'>
        <label>Name</label>
        <input type="text" name='name' placeholder='Enter course name' />
      </div>
    </div>
  )
}

export default CourseDetails;

{/* <div className="admin--dashboard__details">
      <div className="details--header">
        {selectedFaculty?._id ? selectedFaculty.name : title}
      </div>
      <div className="form--container__group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <label>Acronym</label>
        <input
          type="text"
          name="acronym"
          placeholder="acronym"
          value={item.acronym}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <label>Description</label>
        <textarea
          placeholder="description"
          name="description"
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form--container__btns">
        <button className="details--btn" onClick={() => handleSubmit()}>
          Save
        </button>

        {selectedFaculty?._id && (
          <button className="details--btn" onClick={() => handleRemove()}>
            Cancel
          </button>
        )}
      </div>
    </div> */}