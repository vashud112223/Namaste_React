//npm is not a node package manager, it is a package manager where every package and library is hosted
// package.json file is a configuration for npm, it keeps the track of version is installed
// bundler-> it bundles your app like bundles the html,css,javascript code and shift to production
// bundlers are webpack,vite,parcel
// ther are two types of depencies, one is normal which is used for production and second one is for development(-D)
//  "parcel": "^2.15.0" -> (^)this is known as cadet (~) which is used to automatically uprgaded its minor version, this is known as tilde which is used to automatically uprgaded its major version
// always uses cadet
// package-lock json file keeps the track of exact version installed
// node modules is like the database which contains all the  packages.
// dependencies over dependencies known as a transitive dependency.
// if we have package.json and package-lock json then we can regenerate node modules so no need to push node modules on github.
