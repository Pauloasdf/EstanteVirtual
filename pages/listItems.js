import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Link from 'next/link'
import { AddRounded, PlusOneRounded, SearchRounded } from '@material-ui/icons';

export function mainListItems() {
  return (
    <div>
      <Link href="/Search">
        <ListItem button>
          <ListItemIcon>
            <AddRounded />
          </ListItemIcon>
          <ListItemText primary="Adicionar" />
        </ListItem>
      </Link>
      <Link href="/">
        <ListItem button>
          <>
            <ListItemIcon>
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Estante" />
          </>
        </ListItem>
      </Link>
      <Link href="/Dashboard">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Relatórios" />
        </ListItem>
      </Link>
    </div>
  );
}

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);
