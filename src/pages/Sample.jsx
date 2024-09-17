import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

// Define the custom navigation component within the same file
const NavigateComponent = ({ to }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate(to);
    }, [navigate, to]);

    return null; // This component doesn't render anything
};

// Define a custom component to handle logout
const LogoutComponent = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        sessionStorage.removeItem("existingUser");
        sessionStorage.removeItem("token");
        navigate('/'); // Redirect to login or homepage
    }, [navigate]);

    return null; // This component doesn't render anything
};

function Sample() {
    // Define the steps for the chatbot
    const steps = [
        {
            id: 'Greet',
            message: 'Hello, welcome to our website',
            trigger: 'Ask Name',
        },
        {
            id: 'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, please select from the below options.',
            trigger: 'issues',
        },
        {
            id: 'issues',
            options: [
                { value: 'cmpl', label: 'Complaint Submission', trigger: 'NavigateToGrievance' },
                { value: 'log', label: 'Logout', trigger: 'HandleLogout' },
            ],
        },
        {
            id: 'NavigateToGrievance',
            component: <NavigateComponent to="/grievance" />, // Navigate to the Grievance route
            asMessage: true, // Ensures it is treated as a message
            end: true,
        },
        {
            id: 'HandleLogout',
            component: <LogoutComponent />, // Handle logout
            asMessage: true,
            end: true,
        },
    ];

    return (
        <Segment className='mt-5'>
            <Chatbot steps={steps} />
        </Segment>
    );
}

export default Sample;
