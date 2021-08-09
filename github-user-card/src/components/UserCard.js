import React from "react";
import axios from "axios";


class UserCard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="user-card">
                <div className="card-header">
                    <h2>{this.props.user.login}</h2>
                    <p>{}</p>
                </div>
            </div>
        )
    }
}

export default UserCard;