// 在这里维护团队主页。研究成果和成员有可公开的资料后，可按注释中的格式添加。
const teamSite = {
  name: "Universe Lab",
  headline: "世界模型与空间智能",
  intro: "我们研究如何从有限观测建立三维世界模型，让智能体在其中生成场景、推演行动，并通过交互学习自主规划。",
  vision: "我们的长期目标是让智能体借助世界模型理解环境、预测变化，并在行动前比较不同选择。我们关注空间表征、世界生成与自主规划之间的联系，以及这些能力如何在交互中持续改进。",
  heroImages: [
    { src: "./hero.jpg", alt: "抽象曲面研究示意图" },
    { src: "./hero-world.jpg", alt: "三维点云地形研究示意图" },
  ],
  about: "Universe Lab 由来自华东师范大学与上海创智学院的学生共同推进。我们通过论文讨论、代码实现和实验反馈形成研究判断，目前主要在自动驾驶场景中验证三维重建、可控生成与闭环评测方法。",
  practices: [
    { title: "共同探索", description: "从读懂一篇论文到复现一个实验，成员共同分享代码、讨论结果，并在相互评审中修正想法。" },
    { title: "AI-Native 研究", description: "将 AI 融入论文跟踪、编程、实验与知识整理，把更多精力用于提出问题和检验假设。" },
    { title: "开放与实用", description: "在真实任务中检验方法，以开源代码和可复现的实验分享成果，重视工作能否被理解、验证和使用。" },
  ],
  research: [
    {
      title: "三维世界模型与空间表征",
      description: "从有限观测恢复可持续更新的三维世界。我们研究前馈式 3D/4D 重建、动静分离与长序列场景表征，探索几何、外观与运动的一致建模。",
    },
    {
      title: "可控世界生成与交互仿真",
      description: "生成可编辑、可交互且保持时空一致性的场景。我们探索场景补全、轨迹与行为控制、多参与者交互，用可控变体支持数据生成和反事实推演。",
    },
    {
      title: "模型驱动的自主智能体",
      description: "让智能体利用世界模型推演行动后果并自主规划。我们研究目标分解、工具协作与反馈驱动的迭代，以闭环评测检验规划效果，并为持续学习提供依据。",
    },
  ],
  project: {
    title: "World Corner Agent",
    description: "面向自动驾驶长尾风险的研究项目。我们探索如何让智能体主动发现测试覆盖缺口，生成难以在真实道路上重复采集的风险事件，并在闭环仿真中验证它们。",
    steps: [
      { title: "定位失效", description: "从运行日志和模型表现中寻找覆盖缺口，确定要验证的风险和触发条件。" },
      { title: "重建并生成变体", description: "重建、补全三维场景，再调整遮挡、参与者轨迹或交互时机，生成可控变体。" },
      { title: "仿真与评估", description: "运行多智能体仿真，评估场景的合理性、风险程度和驾驶策略的表现。" },
      { title: "反馈与再验证", description: "将有效样本用于训练和独立验证，用反馈决定下一轮生成目标。" },
    ],
    example: "例如，从一段雨夜高速行驶记录出发，调整车辆切入、前车急刹与后车逼近的时机，比较不同组合下驾驶策略的表现。",
  },
  work: [
    { type: "研究项目", title: "FreeForward4D", description: "探索无需输入相机位姿的前馈式 4D 驾驶场景重建。", url: "https://akkzzzz.github.io/FreeForward4D/" },
    { type: "在研方向", title: "ADForward", description: "探索无标注、流式状态驱动的持续前馈重建，支持长序列场景建模。", url: "" },
    { type: "开源工具", title: "ADToolBox", description: "面向驾驶场景的可组合工具，覆盖视频检索、动态重建、场景编辑与策略评估。", url: "https://github.com/Max-luo-song/ADToolBox" },
  ],
  people: [
    { name: "郭洛松", research: "待补充", status: "学院学生 · 2025级", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "高浩淳", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "杨翔", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "林鼎澔", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "罗毅", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "侯振宇", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "高傲", research: "待补充", status: "待补充", bio: "", photo: "./member-placeholder.jpg", url: "" },
    { name: "李超阳", research: "待补充", status: "学院学生 · 2024级", bio: "", photo: "./member-placeholder.jpg", url: "" },
  ],
  contact: {
    text: "欢迎围绕三维重建与补全、可控场景生成、多智能体仿真和自主规划交流研究想法。期待与研究者、开发者及行业伙伴共同探索新的问题和验证任务。",
    email: "",
  },
};
