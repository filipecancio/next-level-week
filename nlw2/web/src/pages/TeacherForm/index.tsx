import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css';

function TeacherForm(){

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' } 
    ]);

    function addNewScheduleItem(){

        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Awesome! You want to give lessons"
            description="The first step is fill this inscription form"/>
        
        
            <main>
                <fieldset>
                    <legend>Seu nome</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre as aulas</legend>
                    
                    <Select 
                        name="subject" 
                        label="Materia" 
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Geografia', label: 'Geografia'},
                        ]}
                    />
                    <Input name="cost" label="Hour cost for your class" />
                </fieldset>

                <fieldset>
                    <legend>Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>
                {scheduleItems.map(scheduleItem => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select 
                            name="weed_day" 
                            label="Dia da Semana" 
                            options={[
                                { value: '0', label: 'Domingo'},
                                { value: '1', label: 'Segunda'},
                                { value: '2', label: 'Terça'},
                                { value: '3', label: 'Quarta'},
                                { value: '4', label: 'Quinta'},
                                { value: '5', label: 'Sexta'},
                                { value: '6', label: 'Sabado'},
                            ]}
                        />
                        <Input name="from" label="Dás" type="time"/>
                        <Input name="to" label="Até" type="time"/>
                    </div>
                    )
                })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>

    )
}

export default TeacherForm;