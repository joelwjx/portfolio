import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Segment, Grid, Container} from 'semantic-ui-react'

class Home extends React.Component {
    render() {
        return (
            <div>
            <Segment fluid size="massive" padded="very" textAlign="center">
                <Header>
                    Hi. I'm Joel Wong.
                    <Header.Subheader>I am a...</Header.Subheader>
                </Header>
            </Segment>
            <Container>
            <Grid columns={3} centered textAlign="center" verticalAlign="center">
                <Grid.Column>
                <Link to="/kek">     
                        <Segment padded="very" raised textAlign="center" size="huge">
                            <Icon name="gamepad" size="massive"></Icon>
                            <Header as="h1">Game Designer</Header>
                        </Segment>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="/kek">     
                        <Segment padded="very" raised textAlign="center" size="huge">
                            <Icon name="code" size="massive"></Icon>
                            <Header as="h1">Programmer</Header>
                        </Segment>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Segment padded="very" raised textAlign="center" size="huge">
                        <Icon name="lightbulb outline" size="massive"></Icon>
                        <Header as="h1">UX Designer</Header>
                    </Segment>
                </Grid.Column>
            </Grid>
            </Container>
            </div>
        );
    }
}

//background: radial-gradient(circle, rgba(255,255,255,1) 66%, rgba(244,244,244,1) 100%);

export default Home;
