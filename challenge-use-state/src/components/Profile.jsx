import React from "react";

const Profile = () => {
  const [profile, setProfile] = React.useState({
    name: "John Smith",
    age: 30,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <h3>Profile Information:</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
