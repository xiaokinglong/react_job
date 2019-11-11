import React, { useState, useEffect, useRef  } from 'react';

function User(props) {
	const [ userInfo, setUserInfo ] = useState({});

	
	// 使用的useLayoutEffect 实现的 componentWillMount
	useEffect(
		() => {
			const obj = {
				name: 'Long',
				age: 32,
				phone: '13275858599'
			}
			localStorage.setItem('info', JSON.stringify(obj))
			function Timer() {
				console.log(3);
				return new Promise((rej, res) => {
					setTimeout(() => {
						const info = JSON.parse(localStorage.getItem('info'));
						console.log({
							info
						})
						rej(info);
					}, 1000);
				});
			}
			// 获取数据的函数的
			async function getData() {
				console.log(2);
				let data = await Timer();
				setUserInfo(data);
			}
			console.log(1);
			// 获取的存储在的localStorage用户的信息
			let info = getData();
			console.log({ info });
      setUserInfo(info);
      console.log(btn.current)
		},
		[]
  );
  
  const btn = useRef(null);
  
	return (
    <div>
      <p>{ userInfo.name }</p>
      <p onClick={ () => setUserInfo({name: '网'}) } ref={btn}>点我</p>
    </div>
  )
}

export default User;
