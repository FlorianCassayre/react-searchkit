import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Segment,
  Container,
  Header,
  Grid,
  Card,
  GridColumn,
} from 'semantic-ui-react';
import {
  ReactSearchKit,
  SearchBar,
  Count,
  Sort,
  Pagination,
  ResultsPerPage,
} from '@app/components';
import { ResultsContainer } from './ResultsContainer';

class Demo extends Component {
  render() {
    const sortValues = [
      {
        text: 'Best Match',
        value: 'bestmatch',
      },
      {
        text: 'Newest',
        value: 'mostrecent',
        order: [{ text: 'ASC', value: 'asc' }, { text: 'DESC', value: 'desc' }],
      },
    ];

    const resultsPerPageOptions = [
      {
        text: '10',
        value: 10,
      },
      {
        text: '20',
        value: 20,
      },
      {
        text: '50',
        value: 50,
      },
    ];

    return (
      <div>
        <ReactSearchKit
          apiConfig={{ url: 'https://videos.cern.ch/api/records' }}
        >
          <div>
            <Segment inverted>
              <Container>
                <Grid columns="equal" verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h1" content="React-searchkit" inverted />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="center">
                      <SearchBar />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>

            <Container>
              <Grid style={{ padding: '2em 0' }}>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Card>
                      <Card.Content header="Access Right" />
                      <Card.Content description="" />
                    </Card>
                    <Card>
                      <Card.Content header="File Type" />
                      <Card.Content description="" />
                    </Card>
                    <Card>
                      <Card.Content header="Keywords" />
                      <Card.Content description="" />
                    </Card>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid.Row>
                      <Grid.Column>
                        <Count />
                      </Grid.Column>
                      <Grid.Column>
                        <Sort
                          values={sortValues}
                          defaultSortBy="mostrecent"
                          defaultOrder="desc"
                          showOnEmptyResults={true}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <ResultsPerPage
                          values={resultsPerPageOptions}
                          defaultValue={10}
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <ResultsContainer />
                    </Grid.Row>
                    <Grid.Row>
                      <Pagination />
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        </ReactSearchKit>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
