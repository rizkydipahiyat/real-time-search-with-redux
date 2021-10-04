import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from ".";
import { cryptoFetch } from "../actions/cryptoActions";

const Cryptocurrency = () => {
	const dispatch = useDispatch();
	const fetchCrypto = useSelector((state) => state.fetchCrypto);
	const { loading, coins: isFetching } = fetchCrypto;
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		dispatch(cryptoFetch());
	}, [dispatch]);

	if (loading) return <Loader />;
	return (
		<>
			<div className="input-search">
				<div className="text-center">
					<input
						type="text"
						value={searchTerm}
						placeholder="Search Cryptocurrency..."
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
			<Row>
				{isFetching?.data?.coins
					.filter((coin) => {
						return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
					})
					.map((koin, i) => (
						<Col sm={3} key={i}>
							<Card className="m-2">
								<Col>
									<p>
										{koin.rank} {koin.name}
									</p>
								</Col>
								<Col>
									<Image src={koin.iconUrl} width={25} />
								</Col>
							</Card>
						</Col>
					))}
			</Row>
		</>
	);
};

export default Cryptocurrency;
