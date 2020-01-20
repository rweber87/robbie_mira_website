import React from 'react';
import { Table } from 'semantic-ui-react';

export default function Qanda() {
  return (
    <div className='welcome-text'>
      <div>QANDA</div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>English</Table.HeaderCell>
            <Table.HeaderCell singleLine>German</Table.HeaderCell>
            <Table.HeaderCell singleLine>Bavarian</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>What is your name?</Table.Cell>
            <Table.Cell>Wie heißt du?</Table.Cell>
            <Table.Cell>Wia hoast du?</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>One beer please</Table.Cell>
            <Table.Cell>Ein Bier bitte</Table.Cell>
            <Table.Cell>A hoibe bittschön</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>What time is it?</Table.Cell>
            <Table.Cell>Wie vile Uhr is es?</Table.Cell>
            <Table.Cell>Wia fui Uah isn?</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>No, thank you</Table.Cell>
            <Table.Cell>Nein, danke</Table.Cell>
            <Table.Cell>Na, merci.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Yes, please</Table.Cell>
            <Table.Cell>Ja, bitte</Table.Cell>
            <Table.Cell>Ja, bittschön</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>My name is...</Table.Cell>
            <Table.Cell>Ich heiße...</Table.Cell>
            <Table.Cell>I hoas...</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Where are you from?</Table.Cell>
            <Table.Cell>Wo kommst du her?</Table.Cell>
            <Table.Cell>Wo bist du her?</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>I am hungry</Table.Cell>
            <Table.Cell>Ich habe hunger</Table.Cell>
            <Table.Cell>I hob hunga</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>The check please</Table.Cell>
            <Table.Cell>Die Rechning bitte</Table.Cell>
            <Table.Cell>D'rechnung bittschön</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>I like you</Table.Cell>
            <Table.Cell>Ich mag dich</Table.Cell>
            <Table.Cell>I mog di</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>I am from...</Table.Cell>
            <Table.Cell>Ich komme aus...</Table.Cell>
            <Table.Cell>I kim aus...</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
