import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Gift extends React.Component {
    constructor() {
        super();

        this.state = {
            person: '', present: ''
        } 
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormControl 
                            className="input-person"
                            onChange={event => this.setState({ person: event.target.value})}
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Gift;