---
title: '探索 LoRA：面向大语言模型的高效微调'
description: '深入理解 LoRA，也就是 Low-Rank Adaptation，以及它如何在不需要巨大算力和存储成本的情况下，让大语言模型完成高效的任务微调。'
pubDate: 'Oct 4 2025'
heroImage: '../../assets/images/blog3-hero.jpeg'
tags: ['AI', 'GPT', 'LLM', 'Learning']
language: 'zh'
defaultLanguage: 'en'
translationKey: 'post3'
---

# 探索 LoRA：面向大语言模型的高效微调

**总结：**

这篇文章是我对 LoRA，也就是 Low-Rank Adaptation 的一次深入学习记录。

LoRA 让大语言模型可以用更低的算力和存储成本完成高效的任务微调。

---

最近，我读完了论文 **LoRA: Low-Rank Adaptation of Large Language Models**。

我想借此学习如何优化和调整 generative pre-trained transformers。

**LoRA** 是一种通过 low-rank adapters 对大语言模型进行轻量微调的方法。

下面是我从论文中学到的几个最有意思的观点：

1. **轻量级 adapters：** LoRA 允许我们为大语言模型训练轻量级 adapters。
以 GPT-3 为例，原模型约为 350GB。
如果训练 100 个不同的 LoRA adapters，总存储只会增加到约 354GB，而不是 35TB。
2. **低内在维度：** 预训练语言模型具有 low intrinsic dimension。
这意味着即使被投影到更小的子空间中，它们也能高效学习。
3. **高效微调：** LoRA 会冻结原始模型权重，只更新 low-rank matrices。
这种方式让微调更便宜、更快，也更节省内存。
4. **任务专门化：** 这种方法支持 task-specific adaptation，而不需要复制庞大的模型。
它也让不同 adapters 之间的快速切换成为可能。
5. **强表现：** 在 GLUE、WikiSQL 和 SAMSum 等 benchmark 上，LoRA 的表现接近 full fine-tuning，同时显著降低计算和存储成本。

我很期待未来继续实验这些想法。

从创建更小的 task-specific adapters，到探索如何让高效微调技术帮助前沿 AI 模型变得更实用、更可扩展，也更容易被更多人使用。

接下来，我准备阅读 Thinking Machines Lab 最近发布的一篇文章 *“LoRA Without Regret”*，继续学习在微调大语言模型时如何调整 hyperparameters。

[Thinking Machines Lab, 2025](https://thinkingmachines.ai/blog/lora/)

![LoRA Without Regret](../../assets/images/blog3-2.png)
