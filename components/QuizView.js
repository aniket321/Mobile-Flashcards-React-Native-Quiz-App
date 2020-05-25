import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
} from "react-native"
import { connect } from "react-redux"
import Button from './Button'
import TextMessage from './TextMessage'

class QuizView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            questionNumber: 0,
            showAnswer: false
        }
    }

    toggleShowAnswer = () => {
        showAnswer = this.state.showAnswer
        this.setState({ showAnswer: !showAnswer })
    }

    handleRetakeQuiz = () => {
        this.setState(() => ({
            score: 0,
            questionNumber: 0,
        }))
    }

    handleSubmitAnswer = (response) => {
        let score = response ? this.state.score + 1 : this.state.score
        let questionNumber = this.state.questionNumber + 1

        this.setState(() => ({
            score: score,
            questionNumber: questionNumber
        }))

    }

    render() {
        const { questionNumber, score } = this.state
        const { deck } = this.props
        const { questions } = deck
        const totalQuestions = questions.length

        if (totalQuestions == 0) {
            return (
                <View style={[styles.container, styles.center]}>
                    <TextMessage
                        message="Sorry, as there are no cards present in this deck you cannot take the Quiz. Go back and create some cards"
                    />
                </View>
            )
        } else if (questionNumber + 1 > totalQuestions) {
            return (
                <View
                    style={[styles.container, styles.center]}
                >
                    <TextMessage
                        message="Congratulations!! You Completed the Quiz"
                    />
                    <Text style={{ fontSize: 25, textAlign: "center" }}>
                        Your score: {score}/{questionNumber}
                    </Text>
                    <View style={styles.btnContainer}>
                        <Button
                            onPress={() => this.handleRetakeQuiz()}
                            btnText="Re-take the Quiz"
                            disabled={false}
                        />

                        <Button
                            onPress={() => this.props.goBack()}
                            btnText="Go Back to deck"
                            disabled={false}
                        />
                    </View>
                </View>
            )
        }

        return (
            <View>
                <View style={styles.questionNumber}>
                    <Text>
                        {this.state.questionNumber + 1}/{totalQuestions}
                    </Text>
                </View>
                <View>
                    <View style={styles.questionContainer}>
                        {this.state.showAnswer === false ?
                            (
                                <View>
                                    <View>
                                        <Text style={styles.questionText}>
                                            {questions[questionNumber].question}
                                        </Text>
                                    </View>
                                </View>
                            ) :
                            (
                                <View>
                                    <View>
                                        <Text style={styles.questionText}>{questions[questionNumber].answer}</Text>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            onPress={() => this.toggleShowAnswer()}
                            btnText={this.state.showAnswer ? "See question" : "See answer"}
                            disabled={false}
                        />
                        <Button
                            onPress={() => this.handleSubmitAnswer(1)}
                            btnText="Correct"
                            disabled={false}
                        />
                        <Button
                            onPress={() => this.handleSubmitAnswer(0)}
                            btnText="InCorrect"
                            disabled={false}
                        />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20
    },
    questionNumber: {
        fontSize: 30,
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 20
    },
    btnContainer: {
        marginTop: 200
    },
    questionText: {
        fontSize: 25,
        textAlign: "center"
    },
})

export default connect()(QuizView)
