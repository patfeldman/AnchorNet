
    var Constants = {};

    Constants.DefaultNumMoods = 15;
    Constants.Location = {
        //'apiLocation' : 'http://localhost:8083/anchorapi/' // - work
        //'apiLocation' : 'http://localhost:99/anchorapi/' // - work
        'apiLocation' : 'http://localhost:90/anchorapi/' // - HOME
        //'apiLocation' : 'http://openmovieproductions.com/anchorapi/' // - production
    };

    Constants.Moods = 
    [
        {
            'GroupTitle' : 'YAY!',
            'GroupName' : 'YAY',
            'GroupId' : 0, 
            'Moods' : [
                {
                    'Title': 'Enthusiastic', 
                    'Image': 'enthusiastic.png', 
                    'MoodId' : 0
                },{
                    'Title': 'Cheerful', 
                    'Image': 'cheerful.png',
                    'MoodId' : 1
                },{
                    'Title': 'Content', 
                    'Image': 'content.png',
                    'MoodId' : 2
                },{
                    'Title': 'Calm', 
                    'Image': 'calm.png',
                    'MoodId' : 3
                }
            ]
        }, {
            'GroupTitle' : 'meh.',
            'GroupName' : 'meh',
            'GroupId' : 1, 
            'Moods' : [
                {
                    'Title': 'Lethargic', 
                    'Image': 'lethargic.png',
                    'MoodId' : 0
                },{
                    'Title': 'Uninterested', 
                    'Image': 'uninterested.png',
                    'MoodId' : 1
                },{
                    'Title': 'Distracted', 
                    'Image': 'distracted.png',
                    'MoodId' : 2
                },{
                    'Title': 'Unsettled', 
                    'Image': 'unsettled.png',
                    'MoodId' : 3
                }
            ]
        }, {
            'GroupTitle' : 'BOO!',
            'GroupName' : 'BOO',
            'GroupId' : 2, 
            'Moods' : [
                {
                    'Title': 'Sad', 
                    'Image': 'sad.png',
                    'MoodId' : 0
                },{
                    'Title': 'Stressed', 
                    'Image': 'stressed.png',
                    'MoodId' : 1
                },{
                    'Title': 'Hopeless', 
                    'Image': 'hopeless.png',
                    'MoodId' : 2
                },{
                    'Title': 'Anxious', 
                    'Image': 'anxious.png',
                    'MoodId' : 3
                }
            ]
        }
    ];

    function something(){
    };
