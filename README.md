# Odyn's Eye Admin Panel

Odyn's eye admin panel is one of the 4 components, which is in charge
of retrieving data with analysis, as well as, human readable conclusions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

In order to start it up You have to have facebookClientId due to secured paths
with oauth2 based login.

After suppliing it, also all components are required for proper functioning.

### Local deployment

As it is not common, it is worth mentioning that this app is 
deployed locally on *https* not ~~http~~

## Routing
```
├── '/'
│   ├── meetings
│       └── :meetingId
│        
└── settings
│
└── live
│
└── home
│
└── analysis
│
└── recordings
```


```Disclaimer
Many endpoints are under development, hence there are many functionalities
not implemented due to time limitation. Most developed is meetings path as it is core functionality.
```

### Oauth2
We have implemented Oauth2 login with facebook which is responsible for
veryfing user identity (and in future) to be taken advantage of fe. To schedule facebook events.

### Welcome screen
![img.png](.imgs/img.png)
After login user is presented with simple welcome 
screen (which is simply just as a placeholder)

### Meeting 
![img.png](img.png)
After navigating to meeting screens user is able to browse already 
ended meetings, as well as possibility to browse not scheduled. 

### Meeting overview
![img_1.png](.imgs/img_1.png)
![img_2.png](.imgs/img_2.png)
![img_3.png](.imgs/img_3.png)
![img_3.png](.imgs/img_3.png)
![img_4.png](.imgs/img_4.png)

### New Meeting Creation
![img_5.png](.imgs/img_5.png)
![img_6.png](.imgs/img_6.png)
![img_7.png](.imgs/img_7.png)
![img_8.png](.imgs/img_8.png)
