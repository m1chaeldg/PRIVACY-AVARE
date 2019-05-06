API Log Plug-in
--------------------------

The API Log Plug-in writes log entries for camera and microphone API calls in the apiLog.txt file.

Usage: 
1. push the file apiLogPlugin.apk to your phone
2. start AVARE Box
3. click 'Add App'
4. install the plug-in
5. start the app you want to monitor (via AVARE BOX)
6. read the apiLog.txt

If you want to reset the log file just delete it. A new file is created automatically.

Actual logged APIs:

- Camera (https://developer.android.com/guide/topics/media/camera)
- camera2 (https://developer.android.com/reference/android/hardware/camera2/package-summary)
- MediaRecorder (https://developer.android.com/reference/android/media/MediaRecorder)
- AudioRecord (https://developer.android.com/reference/android/media/AudioRecord)
- If you want to log other methods, take a look at the Hook_Demo.java file.

Example log file:

![alt text](https://github.com/chritsian/PRIVACY-AVARE/blob/master/AVARE-Box-Plug-ins/apiLogPlugin/apiLogScreen.PNG)

If you have any ideas to improve the plug-in, feel free to contact us!
