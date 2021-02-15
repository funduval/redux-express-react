import React, { Component } from 'react';
class Form extends Component {
    state = {}
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <textarea placeholder="Type your message here" className="form-control" id="chatForm" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        );
    }
}

export default Form;