@startuml

left to right direction

:五院管理员: as admin
:企业员工: as employee
:企业管理员: as comAdmin

rectangle 公共服务平台 {
    comAdmin --> (创建材料)
    employee --> (创建材料)
    (创建材料) --> (创建主数据) : include
    (创建材料) --> (创建材料数据) : include
    (创建材料) -left-> (提交审核)
}

rectangle 材料库管理平台 {
    admin --> (审核材料)
    (审核材料) --> (通过审核) : include
    (审核材料) --> (驳回) : include
    (通过审核) <|-- (主数据生效)
    (通过审核) <|-- (材料数据升版)
}

(提交审核) -right-> (审核材料)


@enduml