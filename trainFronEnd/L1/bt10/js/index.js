

const wrapperModal = document.querySelectorAll('.wrapper__btn')
const btnModal = wrapperModal[0].querySelector('.btn-form')


console.log(btnModal, wrapperModal)
btnModal.addEventListener('click', toogleModal)
let toogleForm = true

function toogleModal () {
	const modalLogin = document.querySelector('.modal__login')
	modalLogin.style.display = 'block'
}

// Xử lý inputField

const inputField = document.getElementsByTagName('input')

if(inputField) {
	const inputFieldLength = inputField.length
	for(let i = 0 ; i < inputFieldLength; i++) {
		inputField[i].addEventListener('change', handleChange)
	}
}
	const userName = document.querySelector('.username')
	const password = document.querySelector('.password')

	
function handleChange () {
	const userNameValue = userName.value
	const formGroup =	userName.parentNode
	const formItem = formGroup.parentNode
	const errorUsername = formItem.querySelector('.error__message')
	if ( userNameValue.trim().length === 0) {
		errorUsername.innerText = "Xin mời nhập tên user"
	} else{
			errorUsername.innerText = ""
	}
	
	const passwordValue = password.value
	const formGroupPassword =	password.parentNode
	const formItemPassword = formGroupPassword.parentNode
	const errorPassword = formItemPassword.querySelector('.error__message')
	if(passwordValue.trim().length === 0) {
		errorPassword.innerText = "xin mời nhập mật khẩu"
	}
	else {
		errorPassword.innerText = ""
	}
}

//Xử lý form 

const formLogin = document.querySelector('.form__login')
formLogin.addEventListener('submit', submitForm)
let user = "admin"
let pas = "1234"
function submitForm (e) {
	e.preventDefault();
	const userNameValue = userName.value
	const formGroup =	userName.parentNode
	const formItem = formGroup.parentNode
	const errorUsername = formItem.querySelector('.error__message')

	const passwordValue = password.value
	const formGroupPassword =	password.parentNode
	const formItemPassword = formGroupPassword.parentNode
	const errorPassword = formItemPassword.querySelector('.error__message')

	const btnLogin = wrapperModal[1].querySelector('.btn-form')

	btnLogin.innerText = "Loadding..."

	setTimeout(function () {
		if(userNameValue.trim().length === 0 || passwordValue.trim().length === 0) {
			errorPassword.innerText = "Bạn chưa nhập Username hoặc mật khẩu"
			btnLogin.innerText = "Login"
		}else {
			if(userNameValue.trim() === user && passwordValue === pas) {
				alert("Đăng nhập thành công")
				btnLogin.innerText = "Login"
			}else{
				btnLogin.innerText = "Login"
				if(userNameValue.trim() !== user) {
					errorUsername.innerText = "Tên đăng nhập sai mời nhập lại"
				}
				if (passwordValue.trim() !== pas) {
					errorPassword.innerText = "Password sai mời nhập lại"
				}
			}
		}
	}, 2000)
}

// Xử lý forgot Password

const formRegister = document.querySelector('.form__register')
const forgotBtn = formLogin.querySelector('.forgot__form')

forgotBtn.addEventListener('click', toogleRegisterForm)

function toogleRegisterForm () {
	formLogin.style.display = 'none'
	formRegister.style.display= 'block'
}

const oldPasInput = formRegister.querySelector('.old-pas')
const newPasInput = formRegister.querySelector('.new-pas')

formRegister.addEventListener('submit', handleChangePassword)

function handleChangePassword (e) {
	e.preventDefault()

	console.log("alo")

	const oldPasValue = oldPasInput.value.trim()
	const oldPasGroup = oldPasInput.parentNode
	
	

	const newPasValue = newPasInput.value.trim()
	const newPasGroup = newPasInput.parentNode
	

	if(oldPasValue.length === 0) {
		const errormessage = oldPasGroup.parentNode.querySelector('.error__message')
		errormessage.innerText = "Bắt buộc nhập"
	}else {
		if(oldPasValue !== pas) {
			const errormessage = oldPasGroup.parentNode.querySelector('.error__message')
			errormessage.innerText = "Mật khẩu không trùng với mật khẩu hiện tại"
		}else {
				formLogin.style.display = 'block'
				formRegister.style.display= 'none'
		}
	}

	if(newPasValue.length === 0) {
		const errormessage = newPasGroup.parentNode.querySelector('.error__message')
		errormessage.innerText = "Bắt buộc nhập"
	}else {
		pas = newPasValue
	}
}