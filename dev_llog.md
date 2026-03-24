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

# 21-03-26

## remodeled to an extent for a small app

### localStorage implementation

 - understand that saving a state is done right after the state has been changed
 - loading of the state is doing on par with the initiation of the program and most importantly after that a render function should be runned so, when refresh the saved states gets popup

# 22-03-26

## adding more events and refining

### realization of render

 - when i stop coding i always forget what render does  RENDER() RENDERS YOUR ENTIRE DOM SO YU JUST NEED TO CHANGE THE STATE

### SPLICE()

 - this built in has been forgetful for a while now , its basically a splice(startindx,deleteCount,add)

 - what add is juts an optional elements placed at the startindx

### dont listen to clanker 

 - ill keep it simple until i personally hit the limiation of my code 
 - dont over engineer
 - dont use built-ins just cuz its safer and better use it only when need to  

# 23-03-26

## more polislhing

### error understanding 

 - 404 not found might be due to importing file bug , mine was not adding *.js to the file i was importing
 - 