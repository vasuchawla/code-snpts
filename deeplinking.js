
// ----------------------------------------
Android:
// ----------------------------------------
// if deeplinking for a domain: ( in androidManifest before activity close tag )
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="http" />
        <data android:scheme="https" />
        <data android:host="yourdomain.com" /> <!-- Replace 'yourdomain.com' with your actual domain -->
    </intent-filter>


//if deeplinking for a custom scheme: ( in androidManifest before activity close tag )
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="yourapp" /> <!-- Replace 'yourapp' with your custom scheme -->
    </intent-filter>


// ----------------------------------------
ios:
// ----------------------------------------

//add to entitlement file or add associated domain/schema  via xcode
    <key>com.apple.developer.associated-domains</key>
    <array>
        <string>applinks:example_1.com</string>
        <string>applinks:example_2.com</string>
    </array>


// ----------------------------------------
js:
// ----------------------------------------

// import statement in app.js
    import {Linking} from 'react-native'

// in did Mount / useEffect
    Linking.getInitialURL().then(urlHandler); // for when the app is killed
    Linking.addEventListener('url', urlHandler); // for when the app is in background/forground

// function defination
    const urlHandler = function(data){
        let url = data?.url || data; // some cases, data will have a object {url:""} and some cases it will be the url itself as string so this line handles both cases
        if(url)
        {
            let path = url.replace('https://example.com', '');

            if(path == '/path/1')
            {
                // redirect to ABC Screen
            }else if(path == '/path/2')
            {
                // redirect to XYZ Screen
            }
        }
    }
