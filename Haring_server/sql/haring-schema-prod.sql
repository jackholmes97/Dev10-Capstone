drop database if exists haring;
create database haring;
use haring;

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);

-- Element Type
create table elm_type (
    elm_type_id int primary key auto_increment,
    elm_type_name varchar(50) not null unique
);


-- Post

create table submission (
    submission_id int primary key auto_increment,
    submission_title varchar(50) not null,
    submission_description varchar(300),
    submission_demo varchar(250),
    submission_html text not null,
    submission_css text not null,
    elm_type_id int not null,
    app_user_id int not null,
    constraint fk_submission_type_id
        foreign key (elm_type_id)
        references elm_type(elm_type_id),
    constraint fk_submission_user_id
        foreign key (app_user_id)
        references app_user(app_user_id)
);

-- Comment
create table comment (
    comment_id int primary key auto_increment,
    comment_text varchar(2048) not null,
    submission_id int not null,
    app_user_id int not null,
    constraint fk_comment_submission_id
        foreign key (submission_id)
        references submission(submission_id),
    constraint fk_comment_user_id
        foreign key (app_user_id)
        references app_user(app_user_id)
);
-- AppUser



insert into app_role (`name`) values
    ('MEMBER'),
    ('ADMIN');

insert into elm_type (elm_type_name)
values  ('Alert'),
        ('Button'),
        ('Input Field'),
        ('Dropdown'),
        ('Range'),
        ('Checkbox'),
        ('Toggle');

insert into app_user (username, password_hash, enabled) values
    ('member@member.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    ('admin@admin.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

insert into app_user_role values
    (1, 1),
    (2, 2);

insert into submission (submission_title, submission_description, submission_demo, submission_html, submission_css, elm_type_id, app_user_id) values
	('Haring Button','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class="btn-container">
		<button class="btn-primary">Primary</button>
		<button class="btn-secondary">Secondary</button>
		<button class="btn-rounded">Click Me</button>
		<button class="btn-disabled">Click Me</button>
	</div>',
		'.btn-container {
			display: flex;
			justify-content: space-evenly;
			margin-top: 20%;

		}
		/* Primary Button Styling */
		.btn-primary {
			cursor: pointer;
			background-color: transparent;
			border: 2px solid blue;
			border-radius: 2.5px;
			color: blue;
			font-size: 20px;
			width: 100px;
			height: 50px;
			box-shadow: 1px 1px 10px rgba(217, 217, 217, 0.75);
			transition: all 0.4s ease;
		}
		.btn-primary:hover {
			background-color: blue;
			border-radius: 30px;
			color: white;
			border-color: white;
			transform: rotateY(-20deg);
			box-shadow: 10px 10px 0px rgb(60, 60, 255);
		}
		.btn-primary:active {
			transform: translateY(10px);
			box-shadow: 3px 3px 0px rgb(60, 60, 255);
		}
		/* Secondary Button Styling */
		.btn-secondary {
			cursor: pointer;
			background-color: red;
			border: 2px solid red;
			border-radius: 2.5px;
			color: white;
			font-size: 20px;
			width: 110px;
			height: 50px;
			box-shadow: 1px 1px 10px rgba(217, 217, 217, 0.75);
			transition: all 0.4s ease;
		}
		.btn-secondary:hover {
			background-color: white;
			border-radius: 30px;
			color: red;
			border-color: red;
			transform: rotateY(-20deg);
			box-shadow: 10px 10px 0px rgb(255, 60, 60);
		}
		.btn-secondary:active {
			transform: translateY(10px);
			box-shadow: 3px 3px 0px rgb(255, 60, 60);
		}
		/* Tertiary Button Styling */
		.btn-rounded {
			cursor: pointer;
			background-color: green;
			border: 2px solid green;
			border-radius: 30px;
			color: white;
			font-size: 20px;
			width: 120px;
			height: 50px;
			box-shadow: 1px 1px 10px rgba(217, 217, 217, 0.75);
			transition: all 0.4s ease;
		}
		.btn-rounded:hover {
			background-color: white;
			border-radius: 2.5px;
			color: green;
			border-color: green;
			transform: rotateY(-30deg);
			box-shadow: 10px 10px 0px rgba(0, 128, 0);
		}
		.btn-rounded:active {
			transform: translateY(10px);
			box-shadow: 0px 0px 0px rgba(0, 128, 0);
		}
		/* Disabled Button Styling */
		.btn-disabled {
			background-color: grey;
			border: 2px solid grey;
			border-radius: 2.5px;
			color: white;
			font-size: 20px;
			width: 100px;
			height: 50px;
			box-shadow: 1px 1px 10px rgba(217, 217, 217, 0.75);
			transition: all 0.5s ease;
		}
		.btn-disabled:hover {
			cursor: not-allowed !important;
			border-radius: 2.5px;
			background-color: grey;
			color: rgb(172, 172, 172);
			transition: all 0.5s;
			box-shadow: 10px 10px 0px black(60, 60, 255);
		}
		.btn-disabled:active {
			animation: shake 0.15s;
		}
		@keyframes shake {
			0% {
				transform: translate(0);
			}
			25% {
				transform: translate(2px, 2px);
			}
			50% {
				transform: translate(0px, 0px);
			}
			75% {
				transform: translate(-2px, -2px);
			}
			100% {
				transform: translate(0px, 0px);
			}
		}',2,2),
    ('Haring Alerts','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class="alert-container">
        {/* Primary Alert */}
        <a class="btn-text" href="#popup1">Primary</a>
        <div id="popup1" class="alert-overlay">
            <div class="alert-popup">
                <h2>PRIMARY</h2>
                <a class="alert-close" href="#">&times;</a>
                <div class="content">Primary Alert Details</div>
            </div>
        </div>
        {/* Danger Alert */}
        <a class="btn-text" style="{color: &quot;red&quot;}" href="#popup2">Danger</a>
        <div id="popup2" class="alert-overlay">
            <div class="alert-popup" style="{color: &quot;white&quot;, backgroundColor: &quot;red&quot;, border: &quot;2px solid white&quot;, boxShadow: &quot;15px 15px 0px rgb(255, 0, 0, 0.5)&quot;}">
                <h2>ERROR</h2>
                <a class="alert-close" style="{color: &quot;white&quot;}" href="#">&times;</a>
                <div class="content">Error Alert Details</div>
            </div>
        </div>
        {/* Success Alert */}
        <a class="btn-text" style="{color: &quot;green&quot;}" href="#popup3">Success</a>
        <div id="popup3" class="alert-overlay">
            <div class="alert-popup" style="{backgroundColor: &quot;green&quot;, color : &quot;white&quot;, border: &quot;2px solid white&quot;, boxShadow: &quot;15px 15px 0px rgb(0, 128, 0, 0.5)&quot;}">
                <h2>SUCCESS</h2>
                <a class="alert-close" style="{color: &quot;white&quot;}" href="#">&times;</a>
                <div class="content">Success Alert Details</div>
            </div>
        </div>
        {/* Warning Alert */}
        <a class="btn-text" style="{color: &quot;black&quot;}" href="#popup4">Warning!</a>
        <div id="popup4" class="alert-overlay">
            <div class="alert-popup" style="{color: &quot;black&quot;, border: &quot;2px solid black&quot;, backgroundColor: &quot;yellow&quot;, boxShadow: &quot;15px 15px 0px rgb(255, 235, 0, 0.5)&quot;}">
                <h2>WARNING</h2>
                <a class="alert-close" style="{color: &quot;black&quot;}" href="#">&times;</a>
                <div class="content">Warning Alert Details</div>
            </div>
        </div>
    </div>',
	'.alert-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20%;
	}
	.btn-text {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 20px;
		text-decoration: none;
		color: blue
	}
	.btn-text:hover {
		cursor: pointer !important;
		text-decoration: underline;
	}
	.alert-overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.65);
		transition: opacity 500ms;
		visibility: hidden;
		opacity: 0;
	}
	.alert-overlay:target {
		visibility: visible;
		opacity: 1;
	}
	.alert-popup {
		font-family: Arial, Helvetica, sans-serif;
		margin: 14vw auto;
		padding: 2rem;
		border-radius: 2.5px;
		width: 25vw;
		position: relative;
		backdrop-filter: blur(4px);
		opacity: 1!important;
		background: white;
		color: blue;
		border: 2px solid blue;
		box-shadow: 15px 15px 0px rgb(60, 60, 255, 0.75);
	}
	.alert-popup .alert-close {
		position: absolute;
		top: .25em;
		right: .75em;
		transition: all .25s;
		font-size: 2vw;
		font-weight: bold;
		text-decoration: none;
		color: blue;
	}
	.alert-popup .alert-close:hover {
		transform: scale(1.25);
		cursor: pointer !important;
	}',1,2),
    ('Haring Input Fields','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class=\'input-field-container\'>
        <input class="input-field-primary" type="text" placeholder="Primary Input Field" />
        <input class="input-field-password" type="password" placeholder="Password Input Field" />
        <input class="input-field-disabled" type="text" placeholder="Disabled Input Field" disabled/>
        <input class=\'input-field-error\' type=\'text\' placeholder=\'Error Input Field\'/>
    </div>',
	'.input-field-container {
	display: flex;
	  flex-direction: column;
	  align-items: center;
	  margin-bottom: 1rem;
	  margin-top: 1rem;
	}

	.input-field-primary,
	.input-field-password,
	.input-field-disabled,
	.input-field-error {
	  padding: 0.5rem;
	  line-height: 1.5;
	  border: 2px solid blue;
	  background-color: rgb(244, 244, 244);
	  border-bottom: .5px solid rgba(217, 217, 217, 0.75);
	  border-right: .5px solid rgba(217, 217, 217, 0.75);
	  border-radius: 2.5px;
	  font-size: 1rem;
	  margin: 1rem;
	  width: 45%;
	  box-shadow: -1px -1px 10px rgba(217, 217, 217, 0.75) inset;
	  transition: outline 1s ease,
				  color 1s ease,
				  border-radius 1s ease,
				  box-shadow 1s ease-in-out;
	}
	.input-field-primary:focus,
	.input-field-password:focus,
	.input-field-disabled:focus,
	.input-field-error:focus {
	  outline: none;
	  color: blue;
	  border-radius: 20px;
	  border: 1px solid blue;
	  /* border: 2px solid blue;
	  border-top: none;
	  border-left: none; */
	  box-shadow: 5px 5px 1px rgba(0, 0, 255, 0.631);
	  transition: outline 0.75s ease,
				  color 0.75s ease,
				  border-radius 0.75s ease,
				  box-shadow 0.75s ease;
	}

	.input-field-password {
		color: grey;
	}

	.input-field-disabled {
		cursor: not-allowed !important;
		border-color: gray;
	}
	.input-field-disabled:active {
		animation: shake 0.15s;

	}

	@keyframes shake {
		0% {
			transform: translate(0);
		}
		25% {
			transform: translate(2px, 2px);
		}
		50% {
			transform: translate(0px, 0px);
		}
		75% {
			transform: translate(-2px, -2px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}

	.input-field-error {
		color: red;
		border-color: red;
		background-color: rgb(255, 230, 230);
	}
	.input-field-error:focus {
		color: red;
		border-color: red;

		background-color: rgb(255, 230, 230);
		box-shadow: 5px 5px 1px rgba(255, 0, 0, 0.631);
	}',3,2),
    ('Haring Checkbox','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class=\'checkbox-container\'>
            <input type=\'checkbox\' class=\'checkbox-primary\'/>
            <input type=\'checkbox\' class=\'checkbox-secondary\'/>
            <input type=\'checkbox\' class=\'checkbox-disabled\' disabled/>
	 </div>',
	'.checkbox-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 30px;
	 }
	.checkbox-primary,
	.checkbox-secondary,
	.checkbox-disabled {
		--webkit-appearance: none;
		appearance: none;
		height: 50px;
		width: 50px;
		cursor: pointer;
		border-radius: 2.5px;
		box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2) inset;
	}

	.checkbox-secondary {
		border: 1px solid lightgray;
		border-radius: 50px;

	}

	.checkbox-primary::before {
		content: '';
		display: block;
		height: 75%;
		width: 75%;
		transform: scale(0);
		transition: all .5s ease-in-out;
	}
	.checkbox-primary:checked::before {
		transform: scale(1);
		background-color: blue;
		transform: translate(17%, 17.5%);
		border-radius: 50px;
		color: blue;
		border-color: blue;

	}
	.checkbox-primary:checked {
		border-radius: 50px;
		transition: all .75s ease-in-out;
	}

	.checkbox-secondary::before {
		content: '';
		display: block;
		height: 75%;
		width: 75%;
		border-radius: 50px;
		transform: scale(0);
		transition: all .5s ease;
	}

	.checkbox-secondary:checked::before {
		transform: scale(1);
		background-color: green;
		transform: translate(17%, 16.5%);
		border-radius: 50px;
		color: blue;
		border-color: blue;
	}

	.checkbox-disabled {
		cursor: not-allowed;
		background-color: lightgray;
		border: 1px solid grey;
		color: lightgray;
	}',6,2),
('Haring Select','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class=\'select-container\'>
		<select class=\'select-primary\'>
			<option value=\'1\'>Option 1</option>
			<option value=\'2\'>Option 2</option>
			<option value=\'3\'>Option 3</option>
		</select>
		<select class=\'select-disabled\' disabled>
			<option value=\'1\'>Option 1</option>
			<option value=\'2\'>Option 2</option>
			<option value=\'3\'>Option 3</option>
		</select>
	</div>',
	'.select-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
	}
	.select-primary,
	.select-disabled {
		cursor: pointer;
		padding: 0.5rem;
		border: 2px solid blue;
		background-color: rgb(244, 244, 244);
		border-bottom: none;
		border-right: none;
		border-radius: 2.5px;
		font-size: 1rem;
		margin: 1rem;
		width: 30%;
		box-shadow: -1px -1px 10px rgba(217, 217, 217, 0.75) inset;
		transition: outline, color, border-radius, box-shadow 0.5s ease;
	}
	.select-primary:focus,
	.select-disabled:focus {
		outline: none;
		color: blue;
		border-radius: 2.5px;
		border: 2px solid blue;
		border-top: none;
		border-left: none;
		box-shadow: 5px 5px 1px rgba(0, 0, 255, 0.631);
		transition: outline 0.75s ease,
				  color 0.75s ease,
				  border-radius 0.75s ease,
				  box-shadow 0.75s ease;
	}
	.select-disabled {
		cursor: not-allowed !important;
		border-color: gray;
	}
	.select-disabled:active {
		animation: shake 0.15s;
	}
	@keyframes shake {
		0% {
			transform: translate(0);
		}
		25% {
			transform: translate(2px, 2px);
		}
		50% {
			transform: translate(0px, 0px);
		}
		75% {
			transform: translate(-2px, -2px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}',4,2),
    ('Haring Range','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class=\'range-container\'>
            <input type=\'range\' class=\'range-primary\'/>
            <input type=\'range\' class=\'range-disabled\' disabled/>
	</div>',
	'.range-container {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  margin: 30px;
	}
	.range-primary,
	.range-disabled {
		--webkit-appearance: none;
		appearance: none;
		width: 52%;
		margin-bottom: 30px;
	}
	.range-primary::-webkit-slider-runnable-track,
	.range-disabled::-webkit-slider-runnable-track {
		width: 100%;
		height: 3px;
		cursor: pointer;
		animation: 0.2s;
		border-radius: 50px;
		background: rgb(183, 183, 183);
	}
	.range-primary::-webkit-slider-thumb,
	.range-disabled::-webkit-slider-thumb {
		border: 2px solid blue;
		background: transparent;
		backdrop-filter: blur(1px);
		height: 20px;
		width: 20px;
		border-radius: 2.5px;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -9px;
		transition: all 0.5s ease;
	}
	.range-disabled::-webkit-slider-thumb {
		border: 2px solid gray;
		cursor: not-allowed !important;
	}
	.range-primary::-webkit-slider-thumb:active,
	.range-primary::-webkit-slider-thumb:hover {
		border-radius: 50px;
		transform: scale(2);
		transition: all 0.5s ease;
		box-shadow: 5px 5px 1px rgb(60, 60, 255, .75);
	}
	.range-primary::-webkit-slider-thumb:hover {
		cursor: grab;
	}
	.range-primary::-webkit-slider-thumb:active {
		cursor: grabbing;
	}
	.range-primary::-webkit-slider-runnable-track:active,
	.range-primary::-webkit-slider-runnable-track:hover {
		transition: all 0.2s ease;
	}', 5, 2),
    ('Haring Toggle','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'http://www.example.com',
    '<div class=\'toggle-container\'>
		<input type=\'checkbox\' class=\'toggle-switch\'/>
	</div>',
	'.toggle-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 30px;
	}
	.toggle-switch {
		appearance: none;
		width: 62px;
		height: 32px;
		display: inline-block;
		position: relative;
		border-radius: 2px;
		overflow: hidden;
		border: 1px solid #121c26;
		cursor: pointer;
		color: #121c26;
		background-color: #7d8186;
		transition: background-color ease .5s;
	}
	.toggle-switch::before {
		content: \'ON\';
		position: absolute;
		width: 30px;
		height: 32px;
		background-color: #121c26;
		color: white;
		transition: left ease .5s
	}
	.toggle-switch:checked {
		background-color: #7d8186;
		color: white;
		transition: left .5s ease;
	}', 7, 2);