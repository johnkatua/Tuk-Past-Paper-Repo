import React from "react";

const PaperDetails = () => {
  return (
        <div className="admin--dashboard__details">
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
    </div>
  );
};

export default PaperDetails;
