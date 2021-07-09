import Link from "next/link";
import {MainLayout} from "../../components/MainLayout";

export default function Post({ post }){
    //const router = useRouter()
    //console.log(router)
    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Back to all Posts</a></Link>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query}) =>{
    const response = await fetch (`http://localhost:4200/posts/${query.query.id}`)
    const post = await response.json()

    return{
        post
    }
}