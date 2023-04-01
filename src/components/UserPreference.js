import React, { useState } from "react";
import UserPreferenceOptions from "./UserPreferenceOptions";
import { prefOptions } from "./PreferenceOptions";

const UserPreference = () => {
  const [preferenceOptions, setPreferenceoptions] = useState(prefOptions);

  const userPreferenceOptions = () =>
    preferenceOptions.map((ele) => (
      <UserPreferenceOptions option={ele.option} checked={ele.checked} />
    ));

  return (
    <div className="col">
      <div className="row">
        <div className="col">Let us know which way you want to Swinggg</div>
      </div>
      <>{userPreferenceOptions()}</>
    </div>
  );
};

export default UserPreference;
