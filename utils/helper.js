import { AsyncStorage } from "react-native"
import { Notifications } from "expo"
import { askAsync, NOTIFICATIONS } from "expo-permissions"

/**
* @description function to cancel the notifications
*/

const NOTIFICATION_KEY = "Cards:reminder"

export const removeNotifications = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    )
}

/**
* @description function to create notification object
* @returns{object} notification object
*/

const createReminder = () => {
    return {
        title: "Solve the Quiz",
        body: "You have now solved the quiz",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            vibrate: true
        }
    }
}

/**
* @description function to set the notification
*/

export const setReminder = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                askAsync(NOTIFICATIONS).then(({ status }) => {
                    if (status === "granted") {
                        Notifications.cancelAllScheduledNotificationsAsync()
                        let nextDay = new Date()
                        nextDay.setDate(nextDay.getDate() + 1)
                        nextDay.setHours(9)
                        nextDay.setMinutes(30)

                        Notifications.scheduleLocalNotificationAsync(createReminder(), {
                            time: nextDay,
                            repeat: "minute"
                        })

                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                    }
                })
            }
        })
}
