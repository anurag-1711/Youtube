import React from 'react'

const data = [
    {
        "name": "Anurag",
        "text": "Great video! I learned a lot about how to make a delicious laddoo. Thanks for sharing!",
        "replies": [
            {
                "name": "Aditya",
                "text": "I'm glad you enjoyed the video! I've been making laddoos for years, so I'm always happy to share my tips and tricks.",
                "replies": [
                    {
                        "name": "Rohan",
                        "text": "I'm definitely going to try making this laddoo. It looks delicious!",
                        "replies": [
                            {
                                "name": "Aditya",
                                "text": "That's great, Rohan! Let us know how it turns out.",
                                "replies": []
                            }
                        ]
                    },
                    {
                        "name": "Aman",
                        "text": "I love laddoos! They're my favorite Indian dessert.",
                        "replies": [
                            {
                                "name": "Priya",
                                "text": "Same here, Aman! Do you have a favorite flavor?",
                                "replies": [
                                    {
                                        "name": "Aman",
                                        "text": "Definitely the coconut laddoo. How about you, Priya?",
                                        "replies": [
                                            {
                                                "name": "Priya",
                                                "text": "I love the besan laddoo, but the coconut one is a close second.",
                                                "replies": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Priya",
                "text": "I've never made laddoos before, but this video makes it look so easy! I'm going to try making them this weekend.",
                "replies": [
                    {
                        "name": "Sakshi",
                        "text": "That's great, Priya! Let us know how it goes.",
                        "replies": []
                    }
                ]
            },
            {
                "name": "Sakshi",
                "text": "I love your videos! They're always so informative and entertaining. Keep up the great work!",
                "replies": [
                    {
                        "name": "Anurag",
                        "text": "Thank you, Sakshi! I really appreciate your support.",
                        "replies": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Rohan",
        "text": "I just started following you and I'm already a big fan! Your videos are amazing.",
        "replies": []
    },
    {
        "name": "Aman",
        "text": "I'm so glad I found your channel! Your videos have helped me learn so much about Indian culture. Thank you!",
        "replies": [
            {
                "name": "Aditya",
                "text": "You're welcome, Aman! I'm happy to help.",
                "replies": []
            }
        ]
    },
    {
        "name": "Priya",
        "text": "I'm a huge fan of your work! I can't wait to see what you do next.",
        "replies": []
    },
    {
        "name": "Sakshi",
        "text": "I just wanted to say that I really appreciate your videos. They're always so helpful and informative. Thank you for sharing your knowledge with us!",
        "replies": []
    },
    {
        "name": "Aditi",
        "text": "I'm so glad you made this video! I've been wanting to learn how to make laddoos for a while now.",
        "replies": [
            {
                "name": "Anurag",
                "text": "I'm happy to help, Aditi! Let me know if you have any questions.",
                "replies": []
            }
        ]
    },
    {
        "name": "Shreya",
        "text": "This video is so helpful! I'm definitely going to try making laddoos this weekend.",
        "replies": [
            {
                "name": "Riya",
                "text": "That's great, Shreya! Do you have all the ingredients you need?",
                "replies": [
                    {
                        "name": "Shreya",
                        "text": "Yes, I went to the store yesterday and got everything. I'm excited to try making them!",
                        "replies": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Tanya",
        "text": "I love your videos, Anurag! They're so well-produced and easy to follow. Keep up the great work!",
        "replies": [
            {
                "name": "Anurag",
                "text": "Thank you, Tanya! I'm glad you find my videos helpful.",
                "replies": []
            }
        ]
    },
    {
        "name": "Neha",
        "text": "I just started following you and I'm already learning so much! Your videos are amazing.",
        "replies": [
            {
                "name": "Aditya",
                "text": "That's great to hear, Neha! Let us know if there are any topics in particular you'd like us to cover.",
                "replies": []
            }
        ]
    },
    {
        "name": "Kriti",
        "text": "Your channel is one of my favorites! I always look forward to new videos.",
        "replies": [
            {
                "name": "Anurag",
                "text": "Thank you, Kriti! I appreciate your support.",
                "replies": []
            }
        ]
    },
    {
        "name": "Avni",
        "text": "Your videos have inspired me to try cooking more Indian dishes at home. Thank you for sharing your knowledge!",
        "replies": [
            {
                "name": "Aditya",
                "text": "You're welcome, Avni! Let us know how your cooking adventures turn out.",
                "replies": []
            }
        ]
    },
    {
        "name": "Disha",
        "text": "I've learned so much from your videos! You're a great teacher, Anurag.",
        "replies": [
            {
                "name": "Anurag",
                "text": "Thank you, Disha! It's always rewarding to hear that my videos are helping people learn.",
                "replies": []
            }
        ]
    },
    {
        "name": "Mansi",
        "text": "I'm so glad you made this video! I've been wanting to learn how to make laddoos for a while now. I'm definitely going to try making them this weekend.",
        "replies": [
            {
                "name": "Priya",
                "text": "That's awesome, Mansi! Let us know if you have any questions or need any help.",
                "replies": [
                    {
                        "name": "Mansi",
                        "text": "Thanks, Priya! I'll definitely reach out if I need any assistance.",
                        "replies": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Riya",
        "text": "This video is so helpful! I'm definitely going to try making laddoos this weekend.",
        "replies": [
            {
                "name": "Sakshi",
                "text": "Let us know how it goes, Riya!",
                "replies": [
                    {
                        "name": "Riya",
                        "text": "Will do, Sakshi! I'm excited to give it a try.",
                        "replies": []
                    }
                ]
            }
        ]
    }
]

const Comment = ({ data }) => {
    // eslint-disable-next-line
    const { name, text, replies } = data;
    return (
        <div className='flex  py-2 rounded-lg my-1'>
            <img
                className='h-12 px-2'
                src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                alt='icon'
            />
            <div className=' px-1'>
                <p className='text-xl font-semibold'>{name}</p>
                <p>{text}</p>

            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} className=''>
            <Comment data={comment} />
            <div className='px-5 border border-l-black border-white ml-7'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className=' m-4 px-10'>
            <p className='text-2xl font-bold'>Comments: </p>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={data} />
        </div>
    )
}

export default CommentsContainer