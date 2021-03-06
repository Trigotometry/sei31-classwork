import React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ( { data } ) => {
	return (
		<Layout>
			<div>
				<h1>My Site's Files</h1>
				<table>
					<thead>
						<tr>
							<th>relativePath</th>
							<th>prettySize</th>
							<th>extension</th>
							<th>birthTime</th>
						</tr>
					</thead>
					<tbody>
						{ data.allFile.edges.map( { node }, index ) => (
							<td>{ node.relativePath }</td>
							<td>{ node.prettySize }</td>
							<td>{ node.extension }</td>
							<td>{ node.birthTime }</td>
						) }
					</tbody>
				</table>
			</div>
		</Layout>
	)
};

export const query = graphql`
	query {
		allFile {
			edges {
				node {
					relativePath
					prettySize
					extension
					birthTime(fromNow: true)
				}
			}
		}
	}
`;