import React from 'react';
import {Feed, Icon, Label} from 'semantic-ui-react';

const GenerateSpendCategories = ({iconName, categoryName, totalPayments, currency, totalAmount, className}) => {
    return (
        <Feed.Event>
            <Feed.Label  >
                <Icon  name={iconName} circular className={className}/>
            </Feed.Label>
            <Feed.Content style={{marginTop:0}}>
                <Feed.Summary>
                    {categoryName}
                </Feed.Summary>
                <Feed.Date content={totalPayments === 1 ? `${totalPayments} Payment` : `${totalPayments} Payments`} style={{paddingTop:5, fontSize:10}} />
            </Feed.Content>
            <Label style={{height:25, width: 85, borderRadius:15, textAlign:"right", background: "#EBF5FB"}}>
                    {`${currency} ${totalAmount}`} <span style={{paddingLeft: 5, fontSize: 13, cursor: "pointer" }} onClick={()=> alert("yet to implement")}> &gt;</span> 
            </Label>
        </Feed.Event>
    );
}

export default GenerateSpendCategories;