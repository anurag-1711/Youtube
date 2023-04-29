import React from 'react'

const commentsData = [
    {
        name: "Anurag",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [{
            name: "Anurag",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [{
                name: "Anurag",
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [{
                    name: "Anurag",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [{
                        name: "Anurag",
                        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        replies: [{
                            name: "Anurag",
                            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            replies: [{
                                name: "Anurag",
                                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                replies: [{
                                    name: "Anurag",
                                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                    replies: []
                                },]
                            },]
                        },]
                    },]
                },]
            },]
        },]
    },
    {
        name: "Anurag",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [{
            name: "Anurag",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [{
                name: "Anurag",
                text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [{
                    name: "Anurag",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: []
                },]
            },]
        },]
    },
    {
        name: "Anurag",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: []
    },
    {
        name: "Anurag",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: []
    },
    {
        name: "Anurag",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: []
    },
    {
        name: "Anurag",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: []
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
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer