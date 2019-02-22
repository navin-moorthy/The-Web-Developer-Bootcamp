# Notes on Databases

- Installed the Mongo DB following official [doc](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) to install version 4.
- Faced the problem installing because used Ubuntu 16.04 Bionic version listfile instead of Ubuntu 14.04 Trusty Version listfile
- Then installed package was only 2.6 version and ran `sudo apt-get update and sudo apt-get upgrade` to move to MongoDB V4.
- C9 specific commands needed to be executed
- `$ mkdir data`
- `$ echo 'mongod --dbpath=data --nojournal > mongod`
- `$ chmod a+x mongod`
- To start the server run `./mongod` and to use the MongoDB run `mongo` in a seperate command line 
- List of commands learned in Basics MondoDB Session
  + show dbs - Show all databases
  + use demo - Create a new database
  + db.dogs.insert() - insert a new data into the dog Collection inside demo database
  + show collections - shows the list of available collections of data
  + db.dogs.find() - To find the items inside db
  + db.dogs.remove() - To remove the collection items
 
- Mongoose installed in node to connect to Mongo DB from Node
- Error:`(node:6805) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.` can be rectified by `mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true });`
- 