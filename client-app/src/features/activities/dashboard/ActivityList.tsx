import React, { useContext, Fragment } from "react";
import { Item,  Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/acitivityStore";

import ActivityListItem from "./ActivityListItem";


const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {activitiesByDate} = activityStore;
  return (
    <Fragment>
      {activitiesByDate.map(([group,activities]) => (
       <Fragment key={group}>
          <Label size= 'large' color='blue'>
          {group}
        </Label>
            <Item.Group divided>
              {activities.map((activitie) => (
                <ActivityListItem key={activitie.id} activitie={activitie}/>
              ))}
            </Item.Group>
       </Fragment>
      ))}
    </Fragment>

  );
};
export default observer(ActivityList);
