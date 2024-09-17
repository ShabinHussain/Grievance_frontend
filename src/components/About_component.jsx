import React from 'react'
import Card from 'react-bootstrap/Card';

function About_component() {
  return (
    <>
     <Card style={{ width: '550px' }} className='mt-5'>
      <Card.Body>
        <Card.Title>Meet Panther</Card.Title>
        <Card.Text>
        Captain Justice, a symbol of courage and fairness, emerged from the shadows to champion the cause of justice. Born out of a deep commitment to equality and transparency, Captain Justice dedicates their powers to addressing grievances and fighting against injustice.
        </Card.Text>
        <Card.Text>
        From the bustling streets of Metropolis to the quiet corners of small towns, Captain Justice has always been there to lend a hand and a voice. Their journey began with a personal experience of injustice, which ignited a lifelong mission to create a world where everyone is treated with respect and fairness.

        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default About_component