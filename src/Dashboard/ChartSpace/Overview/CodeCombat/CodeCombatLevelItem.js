import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class CodeCombatLevelItem extends Component {

  render() {

    return (
      <ListItem onClick = { () => this.props.levelClickHandler(this.props.keyclone,this.props.name)} button >
      <ListItemText primary = {this.props.name}/>
      </ListItem>
    );
  }
}

export default CodeCombatLevelItem;
