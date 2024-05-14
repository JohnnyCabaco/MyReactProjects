import React from "react";

function Link ({href, iconClass}) {
    return (
    <a href={href} className="profile-link">
        <i className={iconClass}></i>
    </a>
    );
};

export default Link;