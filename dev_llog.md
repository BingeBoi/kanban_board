#   17-03-26

## i polished from where i left off

### fixed outpContainer logic 

 - where task id was not showing up turns out id was inside the element of the array
 i had to prameterized the logic properly and learned about "dataset" attribute 

### fixed dblclick event reccurence

 - if statment with a cond'n stating if the "card" query contains inputs just return.


# 19-03-26

## polished further

### fucked up my code due to lack of git knowledge

 - now i understand to git add . and commit everysingle time, a file is lost its way harder to write all that and understood some remote and local branches workings

### finally my kanban board works based on the status 
 - previously the status element was an input i changed it to dropdown now its much better

# 20-03-26

## remodeled my logic

### DOM manipulation to statedriven rendering

 - i knew this would eventually arrived and it did, the logic i created was an aboslute rookie, i wanted to be done with it , that lead me to creating manual DOM manipulation logic but eventually i turned it around and used state driven logic 

### DOM element logic (rendering logic) vs state logic 

 - State logic and DOM/render logic should never mix.
 They communicate only through data, never direct DOM access.